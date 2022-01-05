# Recebe o Apply do Indeed e encaminha para o Jobs

> ## Caso de sucesso

1. ✅ Recebe uma requisição do tipo **POST** na rota **/api/indeed**
2. ✅ Valida se a requisição foi feita por um **user**
3. ✅ Valida dados obrigatórios **field_1** e **field_2**
4. ✅ Faz a interface dos dados através de um DTO pré definido
5. ✅ Chama o Jobs para integrar o Apply
5. ✅ Retorna **204**, sem dados

> ## Exceções

1. ✅ Retorna erro **404** se a API não existir
2. ✅ Retorna erro **403** se o usuário não for autenticado
3. ✅ Retorna erro **400** se os dados não estiverem no formato esperado
4. ✅ Retorna erro **500** se der erro ao acionar o Jobs