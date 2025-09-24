# Local Supabase Development

## Start local Supabase

```bash
make start
```

## Get credentials

Can be copied into the backend's `.env` file.

```bash
make env
```

## Access local Supabase Studio

```bash
make studio
```

## Stop local Supabase

```bash
make stop
```

## Push to staging

Set the `STAGING_PROJECT_ID` and `STAGING_DB_PASSWORD` environment
variables in the `.env.staging` file.

```bash
make push-staging
```

## Personalized seed file

If you want to include a personalized seed file, you can create a file
called `seed/local.sql` that will be used in addition to the seed file
in the `seed` directory.
