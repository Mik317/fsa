//in
[
    "mkdir tmp",
    "INIT",
    "STATUS",
    "touch tmp/1",
    "COMMIT",
    "date > tmp/1",
    "STATUS",
    "mkdir tmp/sub",
    "touch tmp/sub/2",
    "COMMIT",
    "date > tmp/sub/2",
    "STATUS",
    "rm -rf tmp"
]
//out
{"modified":[],"added":[],"deleted":[]}
{"modified":["1"],"added":[],"deleted":[]}
{"modified":["sub/2"],"added":[],"deleted":[]}