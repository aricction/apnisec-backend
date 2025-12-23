// src/app/services/IssueService.ts
import { IssueRepository } from "../repositories/IssueRepository";

export class IssueService {
  private IssueRepo = new IssueRepository();

  async getAllIssues() {
    return this.IssueRepo.getAll();
  }

  async createIssue(issueData: {
    title: string;
    description: string;
    type: string;
    userId: string;
    priority?: string;
    status?: string;
  }) {
    return this.IssueRepo.create(issueData);
  }

  async getIssueById(id: string) {
    return this.IssueRepo.getById(id);
  }

  async updateIssue(id: string, issueData: {
    title?: string;
    description?: string;
    type?: string;
    priority?: string;
    status?: string;
  }) {
    return this.IssueRepo.update(id, issueData);
  }

  async deleteIssue(id: string) {
    return this.IssueRepo.delete(id);
  }
}
