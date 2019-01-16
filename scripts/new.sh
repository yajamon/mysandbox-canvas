#!/bin/bash

readonly ROOT=$(cd $(dirname $BASH_SOURCE)/..; pwd)
readonly SRC_ROOT="$ROOT/src"

if [ -z $1 ]; then
    echo "require name." >&2
    exit 1;
fi

cat << EOT > "${SRC_ROOT}/${1}.html"
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${1}</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            background-color: #EEE;
        }

        canvas {
            background-color: #FFF;
        }
    </style>
</head>

<body>
    <canvas id="canvas" width="640" height="360"></canvas>
    <script src="./script/${1}.js"></script>
</body>

</html>
EOT

cat << EOT > "${SRC_ROOT}/script/${1}.ts"
export { };

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
EOT
