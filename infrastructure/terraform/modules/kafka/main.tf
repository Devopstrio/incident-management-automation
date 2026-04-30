resource "aws_msk_cluster" "incident_events" {
  cluster_name           = "incident-event-stream"
  kafka_version          = "3.2.0"
  number_of_broker_nodes = 3

  broker_node_group_info {
    instance_type = "kafka.m5.large"
    client_subnets = var.private_subnets
    security_groups = [aws_security_group.kafka_sg.id]
  }

  encryption_info {
    encryption_in_transit {
      client_broker = "TLS"
    }
  }
}
