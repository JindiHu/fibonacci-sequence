DOCKER_NAMESPACE=fib-seq
IMAGE_NAME=worker
VERSION=latest


dev_build:
	docker build \
	-t $(DOCKER_NAMESPACE)/$(IMAGE_NAME):$(VERSION) \
	-f Dockerfile.dev .

dev_start:
	docker run -it \
	-p 3000:3000 \
	-v /app/node_modules \
	-v ${PWD}:/app \
	$(DOCKER_NAMESPACE)/$(IMAGE_NAME):$(VERSION)
