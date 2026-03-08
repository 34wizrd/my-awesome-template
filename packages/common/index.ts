import { z } from 'zod';

// This is your source of truth for a Product
export const CreateProductSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    price: z.number().positive(),
    description: z.string().optional(),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;