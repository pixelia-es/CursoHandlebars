Handlebars.registerPartial('listadoSalariosAnual', '<h2>Histórico de salarios:</h2><dl class="dl-horizontal">{{#each salarios}}<dt>{{anio}}</dt><dd>Max: {{salarioMaximo importes}}€ / Min: {{salarioMinimo importes}}€ / Promedio: {{salarioPromedio importes}}€</dd>{{/each}}</dl>');