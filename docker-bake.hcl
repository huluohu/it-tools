target "arm64" {
    dockerfile = "Dockerfile"
    tags = ["foooololo/it-tools:latest"]
    platforms = ["linux/arm64"]
}

target "amd64" {
    dockerfile = "Dockerfile"
    tags = ["foooololo/it-tools:latest"]
    platforms = ["linux/amd64"]
}

target "all" {
    dockerfile = "Dockerfile"
    tags = ["foooololo/it-tools:latest"]
    platforms = ["linux/amd64","linux/arm64"]
}
