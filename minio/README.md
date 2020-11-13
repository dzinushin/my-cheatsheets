https://dl.minio.io/client/mc/release/darwin-amd64/mc.RELEASE.2020-06-26T19-56-55Z 

alias mcl=~/opt/bin/mc

mcl config host add analytics2 http://10.3.18.70:9000 analytic <pwd>

mcl config host add analytics http://analytics.fin.cian.ru analytic <pwd>


mcl ls analytics
mcl du analytics

mc admin user list analytics




/opt/bin/mc config host add minio http://10.3.18.19 minio <pwd>


/opt/bin/mc ls minio/client-docs

/opt/bin/mc du minio

/opt/bin/mc cp traefik-1.tgz minio/bosh-misc/

/opt/bin/mc rm --recursive --force --older-than 90d s3/jazz-songs/louis/

/opt/bin/mc rm --recursive --force --older-than 90d minio/client-docs


➜  ~ /opt/bin/mc du -d 2 minio
20MiB	bosh-misc
156KiB	cdn
15GiB	client-docs
175MiB	static
11KiB	swagger
538MiB	tmp
0B	vtb-submissions
16GiB



/opt/bin/mc rm --older-than 90d minio/client-docs


/opt/bin/mc cp --recursive minio/bosh-misc .
/opt/bin/mc cp --recursive minio/cdn .
/opt/bin/mc cp --recursive minio/swagger .
/opt/bin/mc cp --recursive minio/tmp .