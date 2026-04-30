.PHONY: help build up down test lint migrate simulate-incident run-playbook

help:
	@echo "Incident Management Automation - Management Commands"
	@echo "--------------------------------------------------"
	@echo "build             : Build all containers"
	@echo "up                : Start all services"
	@echo "down              : Stop all services"
	@echo "test              : Run all tests"
	@echo "lint              : Run linting checks"
	@echo "migrate           : Run database migrations"
	@echo "simulate-incident : Trigger a synthetic SEV1 alert"
	@echo "run-playbook      : Execute an automated response playbook"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

simulate-incident:
	docker-compose exec api python scripts/simulate-incidents/high_cpu_alert.py

run-playbook:
	docker-compose exec api python scripts/remediate/restart_service.py
