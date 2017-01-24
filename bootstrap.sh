#!/usr/bin/env bash
docker exec postgres /bin/bash -c "psql -U postgres fitness < schema.sql"
docker exec postgres /bin/bash -c "psql -U postgres fitness < seed.sql"