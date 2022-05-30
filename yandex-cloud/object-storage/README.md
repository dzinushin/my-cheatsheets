# Using s3cmd

https://cloud.yandex.ru/docs/storage/tools/s3cmd


```
s3cmd --configure
```

S3 Endpoint — введите storage.yandexcloud.net
DNS-style bucket+hostname:port template for accessing a bucket — введите %(bucket)s.storage.yandexcloud.net
Default Region — введите ru-central1

```
s3cmd ls s3://marketplace-dev-bucket
s3cmd du s3://marketplace-dev-bucket
s3cmd info s3://marketplace-dev-bucket/
s3cmd put hello.txt s3://marketplace-dev-bucket
s3cmd rm s3://marketplace-dev-bucket/hello.txt
```

example how run s3cmd without configuration:
```
s3cmd \
    --access_key="$GCS_CDN_KEY_ID" \
    --secret_key="$GCS_CDN_ACCESS_KEY" \
    --host-bucket="%(bucket)s.storage.googleapis.com" \
    ls s3://<path>
```