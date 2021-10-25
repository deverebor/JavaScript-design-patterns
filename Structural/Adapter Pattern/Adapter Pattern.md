# Adapter Pattern

## O que é ?

Este é um padrão estrutural em que a interface de uma classe é traduzida em outra. Este padrão permite que as classes trabalhem juntas de outra forma devido a interfaces incompatíveis.

## Quando usar ?

Este padrão é frequentemente usado para criar wrappers para novas APIs refatoradas para que outras APIs antigas existentes ainda possam trabalhar com elas. Isso geralmente é feito quando novas implementações ou refatoração de código (feita por motivos como ganhos de desempenho) resultam em uma API pública diferente, enquanto as outras partes do sistema ainda estão usando a API antiga e, portanto, precisam ser adaptadas para trabalharem juntas.
