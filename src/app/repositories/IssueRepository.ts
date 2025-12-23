import {prisma} from "../prisma/prismaClient";

export class IssueRepository {
    async getAll(){
        return prisma.issue.findMany({
            orderBy: { createdAt: "desc"},
        });
    }

    async create(data: {
        title: string;
        description: string;
        type: string;
        userId: string;
        priority?: string;
        status?: string;
    }) {
        return prisma.issue.create({ 
            data: {
                title: data.title,
                description: data.description,
                type: data.type,
                userId: data.userId,
                priority: data.priority,
                status: data.status,
            },
         });
    }

    async getById(id: string) {
        return prisma.issue.findUnique({
            where: { id },
        });
    }

    async update(id: string, data: {
        title?: string;
        description?: string;
        type?: string;
        priority?: string;
        status?: string;
    }) {
        return prisma.issue.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return prisma.issue.delete({
            where: { id },
        });
    }
}

