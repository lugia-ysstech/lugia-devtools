
cd "$(dirname "$0")"

# Go to root
cd ..
root_path=$PWD
lugiac="$root_path/node_modules/.bin/lugia-complie"

lerna="$root_path/node_modules/.bin/lerna"

cd "$root_path/packages/devtools-core"
$lugiac build
echo 'build devtools-core'

cd "$root_path/packages/devtools-conversion"
$lugiac build
echo 'build devtools-conversion'

cd "$root_path/packages/devtools-material"
$lugiac build
echo 'build devtools-material'

cd "$root_path"
$lerna publish "$@/target"
