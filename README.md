# Introduction 
All Services used in VEat Application

# Getting Started
To clone this repository and its submodules run:
```bash
git clone --recurse-submodules https://VEat@dev.azure.com/VEat/VEat/_git/VEat%20Services
```

If you already cloned the repository and find your services empty, run this command:
```bash
git submodule update --init --recursive
```


Pull changes:

```bash
git pull
```

```bash
git submodule update --recursive --remote
```

# Build and Test
docker compose up -d (--build)