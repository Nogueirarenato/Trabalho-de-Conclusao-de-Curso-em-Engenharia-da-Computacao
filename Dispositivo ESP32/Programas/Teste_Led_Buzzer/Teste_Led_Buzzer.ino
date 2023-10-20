
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
 
LiquidCrystal_I2C lcd(0x27, 16, 2);

int ledAmarelo = 27;
int ledVermelho = 25;
int buzzer = 33;
int button = 17;
 
void setup() {
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(button, INPUT
   
  );


  
 lcd.init();
 lcd.backlight();
 lcd.setCursor(3, 0);
 lcd.print("TCC UNIVESP");
 lcd.setCursor(0, 1);
 lcd.print("ENG. DA COMPUT..");
}
 
void loop() {

//  if(button==LOW){
  
    digitalWrite(ledVermelho, HIGH);
    delay(1000);
    digitalWrite(ledVermelho, LOW);
    digitalWrite(ledAmarelo, HIGH);
    delay(1000);
    digitalWrite(ledAmarelo, LOW);
    digitalWrite(buzzer, HIGH);
    delay(500);
    digitalWrite(buzzer, LOW);
//  }
  
  
  
  }
