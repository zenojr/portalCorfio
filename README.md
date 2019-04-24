## zenofranca.com

Projeto interno desenvolvido para empresa CORFIO para consulta de descontos do portal dos representantes.

# Desenvolvedores
  Zeno França Jr,
  Pierre Blitzkow
  
# Portal

http://portal.corfio.com.br:8081/cgi-bin/wspd_cgi.sh/WService=corfio/utils/menu.htm?program=menu.htm

## Tecnologies

`Angular 7`
`Angular Material`
`Progress`

## Development/Production server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

O serviço está hospedado no servidor interno da empresa 192.168.0.241 porta 4201, a pasta interna do projeto é /zeno/portal. Para executar manualmente o serviço o comando é:

ng serve --prod --host=web.corfio.com.br --port=4201 --optimization

O servidor está instalado como serviço e deve subir automaticamente ao reiniciar o servidor .241, em caso de falha basta executar o comando acima 
