# optical-character-recognition-service
## Optical Character Recognition web service powered by Tesseract OCR


### Getting started
To get started first you'll need to install Tesseract OCR. 

* On Windows download Tesseract OCR setup (I used tesseract-ocr-setup-3.05.00dev.exe at the time of writing) from https://github.com/UB-Mannheim/tesseract/wiki
During installation make sure to select "Check Registry Settings" to set up path variables.

![](http://octodex.github.com/images/octdrey-catburn.jpg)

* On Linux  ```sudo apt-get tesseract-ocr```

3. ```git clone https://github.com/mlubovac/optical-character-recognition-service```

4. ```
cd optical-character-recognition-service
npm install
npm start
```

5. Make post request to ```http://localhost:3000/labels```
```curl http://localhost:3000/labels -F "filename=sample.jpg" -F "label=@sample.jpg"```