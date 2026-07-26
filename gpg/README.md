
```
gpg --full-generate-key
gpg -k
gpg -K

gpg --edit-key <KEY>
```


Перенос ВСЕХ ключей на другую машину

```
mkdir gpg-transfer
gpg --armor --export > ~/gpg-transfer/public-keys.asc
gpg --armor --export-secret-keys > ~/gpg-transfer/secret-keys.asc
gpg --export-ownertrust > ~/gpg-transfer/ownertrust.txt
```
```
gpg --import ~/gpg-transfer/public-keys.asc
gpg --import ~/gpg-transfer/secret-keys.asc
gpg --import-ownertrust ~/gpg-transfer/ownertrust.txt
```
