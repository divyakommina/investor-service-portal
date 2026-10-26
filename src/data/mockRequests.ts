import type { ServiceRequest } from "../types/request";

export const mockRequests: ServiceRequest[] = [
  {
    id: "SR1001",
    investorName: "Rahul Sharma",
    requestType: "Bank Update",
    createdDate: "26 Jun 2026",
    status: "Pending",
    assignedTo: "Amit",
    slaDays: 2,
  },
  {
    id: "SR1002",
    investorName: "Priya Singh",
    requestType: "Address Update",
    createdDate: "25 Jun 2026",
    status: "Resolved",
    assignedTo: "Sneha",
    slaDays: 0,
  },
  {
    id: "SR1003",
    investorName: "Vikram Rao",
    requestType: "Nominee Update",
    createdDate: "24 Jun 2026",
    status: "In Progress",
    assignedTo: "Rahul",
    slaDays: 1,
  },
  {
    id: "SR1004",
    investorName: "Anjali Verma",
    requestType: "Bank Update",
    createdDate: "23 Jun 2026",
    status: "Rejected",
    assignedTo: "Rakesh",
    slaDays: 3,
  },
];