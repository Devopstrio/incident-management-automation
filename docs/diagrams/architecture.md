# Architecture & Incident Flow Diagrams

## 11. Automated Triage & Classification (Detailed)
*How the platform determines severity and triggers the correct response chain.*

```mermaid
graph TD
    Alert[New Alert] --> Enrich[Enrich: App, Env, Owner]
    Enrich --> Policy[Evaluate Priority Policy]
    Policy -->|SLA Breach Risk| S1[Severity: SEV1]
    Policy -->|Service Degraded| S2[Severity: SEV2]
    S1 --> PD[Escalate: PagerDuty]
    S1 --> Room[Create: Slack War Room]
    S1 --> Ticket[Open: SNOW P1 Ticket]
```

## 13. Auto-Remediation Loop
```mermaid
graph LR
    Detect[Detection] --> Logic[Playbook Logic]
    Logic --> Action[Restart Pod / Flush Cache]
    Action --> Verify[Health Check]
    Verify -->|Success| Resolve[Auto-Resolve]
    Verify -->|Fail| Escalate[Manual Page]
```

## 20. Post-Incident Review Cycle
```mermaid
stateDiagram-v2
    Resolved --> Review: Schedule PIR
    Review --> Timeline: Auto-Generate
    Timeline --> Actions: Assign Remediation
    Actions --> Knowledge: Update SRE Runbook
```
