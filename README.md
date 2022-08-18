# Simple image editor app
Made by using React & TypeScript on ViteJS

---

### Running without docker

To run app you need to install node modules first by running:

```
yarn install
```

And now you can start app by: 
```
vite
```

or by: 
```
yarn dev
```

### Running fully on docker

When running fully on focker all you have to do is run following command:

```bash
docker build -t your_image_name
```

> **Note** you can replace *your_image_name* by whatever name you want the image of app to be

Then start the image and create a container by running: 
```
docker run --name your_container_name -p 8080:8080 img-editor
```

> **Note** you can replace *your_container_name* by whatever name you want the container to be

### Change port of app
To change the port that app is running you need to change *vite.config.ts*, *Dockerfile* files and also change the *docker run* command.

---

© bartekmolka 2022