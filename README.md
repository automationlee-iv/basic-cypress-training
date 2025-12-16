yml file
El problema del reporte que no se generaba, responde a una intuicion comun, el pipeline no tenia ninguna instruccion en el caso de que algun step fallara, asi que el job se detenia y se marcaba como fallido
Una solucion fue añadir la linea  "continue-on-error: true" para que el job no se detenga, y se genere el reporte sin problema
La segunda solucion es añadir la linea "if:always()", que seria lo mas adecuado, para que el job se muestre como fallido, y que aun asi tengamos el reporte  
