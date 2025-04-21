web: echo $GCP_SA_KEY_JSON > /tmp/gcp-key.json && export GOOGLE_APPLICATION_CREDENTIALS=/tmp/gcp-key.json && npm run start
release: npx prisma migrate deploy