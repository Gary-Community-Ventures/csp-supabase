env:
	@echo "SUPABASE_URL=http://$$(hostname -I | awk '{print $$1}'):54321"
	@echo "SUPABASE_KEY=$$(supabase status 2>/dev/null | grep 'service_role key' | cut -d: -f2 | tr -d ' ')"
status:
	@supabase status
reset:
	supabase db reset --local
pull:
	supabase db pull
seed:
	supabase db reset --local --skip-migrations
studio:
	@echo "http://localhost:54323"
start:
	supabase start
stop:
	supabase stop
restart: stop start
