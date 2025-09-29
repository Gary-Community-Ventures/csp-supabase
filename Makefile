env:
	@echo "SUPABASE_URL=http://$$(hostname -I | awk '{print $$1}'):54321"
	@echo "SUPABASE_KEY=$$(supabase status 2>/dev/null | grep 'service_role key' | cut -d: -f2 | tr -d ' ')"
env-mac:
	@echo "SUPABASE_URL=http://$$(ifconfig | grep 'inet ' | grep -v 127.0.0.1 | head -1 | awk '{print $$2}'):54321"
	@echo "SUPABASE_KEY=$$(supabase status --output json | jq -r '.SERVICE_ROLE_KEY')"
status:
	supabase status
reset:
	supabase db reset --local
studio:
	@echo "http://localhost:54323"
start:
	supabase start
stop:
	supabase stop
restart: stop start

-include .env.staging
export
push-staging:
	@if [ -z "$${STAGING_PROJECT_ID}" ]; then echo "Error: STAGING_PROJECT_ID not set in .env.staging"; exit 1; fi
	@if [ -z "$${STAGING_DB_PASSWORD}" ]; then echo "Error: STAGING_DB_PASSWORD not set in .env.staging"; exit 1; fi
	@echo "Linking to staging project..."
	@supabase link --project-ref $${STAGING_PROJECT_ID} --password $${STAGING_DB_PASSWORD}
	@echo "Pushing schema, roles, and seed data to staging..."
	@supabase db push --linked --include-seed
	@echo "Staging database updated!" 
