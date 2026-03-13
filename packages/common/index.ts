import { z } from 'zod';

// This is your source of truth for a Product
export const CreateProductSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    price: z.number().positive(),
    description: z.string().optional(),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;

// Shared Redis Key Patterns
export const RedisKeys = {
    productStock: (id: string) => `stock:product:${id}`,
    userSession: (id: string) => `session:user:${id}`,
    flashSaleLock: (productId: string) => `lock:flash-sale:${productId}`,
} as const;

// Shared Types for Redis Data
export interface StockUpdate {
    productId: string;
    quantity: number;
    timestamp: number;
}