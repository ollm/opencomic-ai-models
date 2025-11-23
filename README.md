# opencomic-ai-models

This package provides access to AI models used in OpenComic AI.

## Installation

```
npm install opencomic-ai-models
```

## Methods

This package can be used using CommonJS or ES Module.

```js
// CommonJS
const OpenComicAIModels = require('opencomic-ai-models');

// ES Module
import OpenComicAIModels from 'opencomic-ai-models';
```

## Get path

```js
import OpenComicAIModels from 'opencomic-ai-models';

const modelsPath = OpenComicAIModels.path;
```

## Models Info

### Artifact removal

Model | Name | Upscaler | Source
------|------|----------|-------
`1x_NMKD-Jaywreck3-Lite_320k` | NMKD Jaywreck3 Lite | `upscayl` | [NMKD.de](https://nmkd.de/?esrgan)
`1x_NMKD-Jaywreck3-Soft-Lite_320k` | NMKD Jaywreck3 Soft Lite | `upscayl` | [NMKD.de](https://nmkd.de/?esrgan)
`1x-SaiyaJin-DeJpeg` | SaiyaJin DeJpeg | `upscayl` | [OpenModelDB](https://openmodeldb.info/models/1x-SaiyaJin-DeJpeg)

### Descreen

Model | Name | Upscaler | Source
------|------|----------|-------
`1x_halftone_patch_060000_G` | Halftone Patch 060000 G | `upscayl` | [NMKD.de](https://nmkd.de/shared/?dir=ESRGAN/Models/Compression/Halftone)
`1x_wtp_descreenton_compact` | WTP DescreenTon Compact | `upscayl` | [OpenModelDB](https://openmodeldb.info/models/1x-wtp-descreentone-compact)

### Upscale

Model | Name | Upscaler | Source
------|------|----------|-------
`realcugan` | RealCUGAN | `realcugan` | [Moebytes/waifu2x](https://github.com/Moebytes/waifu2x/tree/eaadd13cf54ba3bcb3cbd3e4a1cb2cd922420c9b/real-cugan/models-se)
`realesr-animevideov3` | RealESR AnimeVideo v3 | `upscayl` | [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)
`realesrgan-x4plus` | RealESRGAN x4 Plus | `upscayl` | [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)
`realesrgan-x4plus-anime` | RealESRGAN x4 Plus Anime | `upscayl` | [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)
`realesrnet-x4plus` | RealESRNet x4 Plus | `upscayl` | [xinntao/Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN)
`waifu2x-models-cunet` | Waifu2x CUnet | `waifu2x` | [Moebytes/waifu2x](https://github.com/Moebytes/waifu2x/tree/eaadd13cf54ba3bcb3cbd3e4a1cb2cd922420c9b/waifu2x/models-cunet)
`waifu2x-models-upconv` | Waifu2x UpConv | `waifu2x` | [Moebytes/waifu2x](https://github.com/Moebytes/waifu2x/tree/eaadd13cf54ba3bcb3cbd3e4a1cb2cd922420c9b/waifu2x/models-upconv_7_anime_style_art_rgb)
`4x-WTP-ColorDS` | WTP ColorDS | `upscayl` | [OpenModelDB](https://openmodeldb.info/models/4x-WTP-ColorDS)
`remacri-4x` | Remacri | `upscayl` | [upscayl/upscayl](https://github.com/upscayl/upscayl/tree/d6e9a36b894d302e6268dc239e8a51ff29c49ded/resources/models)
`ultramix-balanced-4x` | Ultramix Balanced | `upscayl` | [upscayl/upscayl](https://github.com/upscayl/upscayl/tree/d6e9a36b894d302e6268dc239e8a51ff29c49ded/resources/models)
`ultrasharp-4x` | Ultrasharp | `upscayl` | [upscayl/upscayl](https://github.com/upscayl/upscayl/tree/d6e9a36b894d302e6268dc239e8a51ff29c49ded/resources/models)
`4xHFA2k` | HFA2k | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`4xLSDIRCompactC3` | LSDIR Compact C3 | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`4xLSDIRplusC` | LSDIR Plus C | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`4x_NMKD-Siax_200k` | NMKD Siax | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`4xNomos8kSC` | Nomos 8k SC | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`RealESRGAN_General_WDN_x4_v3` | RealESRGAN General WDN v3 | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`RealESRGAN_General_x4_v3` | RealESRGAN General v3 | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`uniscale_restore_x4` | Uniscale Restore x4 | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)
`unknown-2.0.1` | Unknown 2.0.1 | `upscayl` | [upscayl/custom-models](https://github.com/upscayl/custom-models/tree/4b6d2cfa59c7442af115dfc6e50fd8d7d40b96ef/models)