/*
 ============================================================================
 Name        : Encriptar String con Cifrado de Caesar
 Author      : Mahc30
 ============================================================================
 */

#include <stdio.h>
#include <pthread.h>

typedef struct {
	char inicio;
	char target;
	int diferencia;
	char string[64];
}encryptedString;

int main(void) {

	encryptedString dis;

	puts("Letra de Inicio y Letra Objetivo. ejemplo: a d");

	scanf(" %c %c%*c", &dis.inicio, &dis.target);

	dis.diferencia = dis.target - dis.inicio;

	printf("diferencia %d target %d inicio %d", dis.diferencia, dis.target, dis.inicio);

	puts("\nEscriba la cadena a cifrar :P");

	fgets(dis.string, 64 , stdin);

	printf("\nString: %s", dis.string);

  for(int i = 0; dis.string[i] != '\0'; i++){
	  dis.string[i] += dis.diferencia;
  }

  dis.string[strlen(dis.string)-1] = 0;

  printf("\nEncriptado: %s", dis.string);
  return 0;
}
