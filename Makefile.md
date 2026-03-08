# --- Variables ---
# This allows you to run commands like 'make backend'
PNPM = pnpm

# --- Installation & Setup ---
.PHONY: setup
setup:
$(PNPM) install
docker-compose up -d

# --- Development ---
# 'pnpm --filter' is the "magic" command for monorepos
.PHONY: backend
backend:
$(PNPM) --filter backend dev

.PHONY: frontend
frontend:
$(PNPM) --filter frontend dev

# Run both at once (requires 'concurrently' installed in root)
.PHONY: dev
dev:
$(PNPM) run dev:all

# --- Infrastructure ---
.PHONY: db-up
db-up:
docker-compose up -d

.PHONY: db-down
db-down:
docker-compose down

# --- Cleanup ---
.PHONY: clean
clean:
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
pnpm store prune