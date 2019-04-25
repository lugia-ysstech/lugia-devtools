root_path=$PWD
echo "$root_path"

lugiacomplie="$root_path/node_modules/.bin/lugia-complie"

cd "$root_path"/packages/devtools-core
$lugiacomplie dev --ig &

cd "$root_path"/packages/devtools-material
$lugiacomplie dev --ig &

cd "$root_path"/packages/devtools-conversion
$lugiacomplie dev --ig &
