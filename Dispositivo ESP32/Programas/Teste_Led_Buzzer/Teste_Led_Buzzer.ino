
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
 
LiquidCrystal_I2C lcd(0x27, 16, 2);

int ledAmarelo = 27;
int ledVermelho = 25;
int buzzer = 33;
int button = 14;
int contador = 0;
 
void setup() {
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(button, INPUT_PULLUP);


  
 lcd.init();
 lcd.backlight();
 lcd.setCursor(3, 0);
 lcd.print("TCC UNIVESP");
 lcd.setCursor(0, 1);
 lcd.print("ENG. DA COMPUT..");
}
 
void loop() {

 if(digitalRead(button) == LOW){
  lcd.clear();
  lcd.setCursor(1, 0);
     
 lcd.print("BOTAO ACIONADO");

    
    while (contador != 200){
     lcd.setCursor(8, 1);
     
    lcd.print(contador);
    digitalWrite(ledVermelho, HIGH);
    delay(50);
    digitalWrite(ledVermelho, LOW);
    digitalWrite(ledAmarelo, HIGH);
    delay(50);
    digitalWrite(ledAmarelo, LOW);
    digitalWrite(buzzer, HIGH);
    delay(50);
    digitalWrite(buzzer, LOW);
    delay(50);
    contador++;
    }
    
    contador =0;

  }
  
  
  
  }
