## Storage Adapter for Bunny CDN

This project is basically a adapter for Ghost CMS to use Bunny CDN service

Relevant Ghost Doc

https://github.com/TryGhost/Ghost-Storage-Base

Bunny CDN API Reference

https://docs.bunny.net/reference/storage-api/

#### Usage

1. Install packages with ```npm i --save```

2. After installing dependencies fill ```config.json``` file with your credentials

3. Then copy folder content to ```ghost/content/adapters/storage/bunny/```

4. Edit or create following piece in the ```config.production.json```

   ```json
   "adapters":{
       "storage":{
         "active": "bunny",
         "bunny":{}
       }
     }
   ```

5. Restart your Ghost instance with ```ghost restart```
