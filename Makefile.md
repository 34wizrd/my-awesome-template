# --- Variables ---
PNPM = pnpm
DOCKER_COMPOSE = docker-compose

# --- Installation & Setup ---
.PHONY: setup
setup:
$(PNPM) install
$(DOCKER_COMPOSE) up -d

# --- Development ---
.PHONY: backend
backend:
$(PNPM) --filter backend dev

.PHONY: frontend
frontend:
$(PNPM) --filter frontend dev

.PHONY: dev
dev:
$(PNPM) run dev:all

# --- Infrastructure ---
.PHONY: up
up:
$(DOCKER_COMPOSE) up -d

.PHONY: down
down:
$(DOCKER_COMPOSE) down

# --- Cleanup ---
.PHONY: clean
clean:
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
$(PNPM) store prune