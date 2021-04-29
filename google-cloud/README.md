Google Cloud


* Google Cloud SDK 

```
brew install google-cloud-sdk

# add to .zshrc
source /opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc
source /opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc
```


https://github.com/sathishvj/awesome-gcp-certifications
=======
* Setup gsutil cli

настраиваем командой (https://cloud.google.com/storage/docs/gsutil_install#hmac)
```
gsutil config -a
```

в результате будет создан plain text конфигурационный файл $HOME/.boto

Примеры использования
```
# ls
gsutil ls gs://cian-static
gsutil ls gs://cian-static/finance
 
# copy
gsutil -m cp -r ./ gs://cian-static/$cdnUploadPath
```


* Setup minio client

```
mc alias set gcs https://storage.googleapis.com <ACCESS KEY> <SECRET KEY>
mc ls gcs/cian-static/finance
```

