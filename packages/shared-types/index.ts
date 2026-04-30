export enum IncidentSeverity {
  SEV1 = "SEV1",
  SEV2 = "SEV2",
  SEV3 = "SEV3",
  SEV4 = "SEV4",
  SEV5 = "SEV5"
}

export enum IncidentStatus {
  OPEN = "OPEN",
  TRIAGED = "TRIAGED",
  ACKNOWLEDGED = "ACKNOWLEDGED",
  RESOLVING = "RESOLVING",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED"
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  severity: IncidentSeverity;
  status: IncidentStatus;
  source: string;
  service: string;
  owner?: string;
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
}

export interface IncidentTimelineEvent {
  id: string;
  incidentId: string;
  event: string;
  type: "SYSTEM" | "USER" | "PLAYBOOK";
  timestamp: string;
}

export interface PlaybookExecution {
  id: string;
  playbookName: string;
  incidentId: string;
  status: "RUNNING" | "COMPLETED" | "FAILED";
  result?: string;
  startTime: string;
  endTime?: string;
}
