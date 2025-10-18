#!/bin/bash

echo "write your commit :";
read commit;

git add .
git commit -m "$commit"
git push