//in
[
    "INIT",
    "STATUS",
    "touch tmp/1",
    "ADD",
    "COMMIT",
    "date > tmp/1",
    "STATUS",
    "mkdir tmp/sub",
    "touch tmp/sub/2",
    "ADD",
    "COMMIT",
    "date > tmp/sub/2",
    "STATUS"
]
//out
{"modified":[],"added":[],"deleted":[]}
{"modified":["1"],"added":[],"deleted":[]}
{"modified":["sub/2"],"added":[],"deleted":[]}