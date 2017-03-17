# optical-character-recognition-service
## Optical Character Recognition web service powered by Tesseract OCR


### Getting started
To get started first you'll need to install Tesseract OCR. 

* On Windows download Tesseract OCR setup from https://github.com/UB-Mannheim/tesseract/wiki. I used tesseract-ocr-setup-3.05.00dev.exe at the time of writing.
During installation make sure to select "Check Registry Settings" to set up path variables.

![](https://github.com/mlubovac/optical-character-recognition-service/blob/master/samples/tesseract.png)

* On Linux  ```sudo apt-get tesseract-ocr```

```
    git clone https://github.com/mlubovac/optical-character-recognition-service
```

```
    cd optical-character-recognition-service
    npm install
    npm start
```

Make post request to ```http://localhost:3000/labels```
```
    curl http://localhost:3000/labels -F "filename=sample1.jpg" -F "label=@samples/sample1.jpg"
    curl http://localhost:3000/labels -F "filename=sample2.jpg" -F "label=@samples/sample2.jpg"    
```