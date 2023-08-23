# teste
# Comandos GIT - 

## Criar repositório rede local apos criar a pasta
```
git --bare init
```
*******

## Clonar para o diretório local:
```
git clone file:\\\\ENDEREÇO-DA-PASTA  ENDEREÇO-NOVA-PASTA
```
*******

## Enviar para o repositório  (master)
```
git push origin master
```
*******

## Criar branch:
```
git branch nome-do-branch
```
*******

## Merge/Meclar Branch
```
git merge parte2
```
*******

## Renomear Branch
### Se estiver no banch:
```
git branch -m novonome
```

### Se estiver em outro branch:
```
git banch -m nomeatual novonome
```

### Apagar o banch remoto e enviar o novo
```
git push origin :nomeantigo novonome
```

### Redefinir branch para o novo nome
```
git push origin -u novonome
```
*******

## Excluir Branch

### Excluir local:
```
git branch -D nome_branch
```

### Excluir remote:
```
git push origin :nome_branch
```
*******

##  Resetar/Atualizar branch 
Remove as ramificações remotas que não possuem mais uma ramificação correspondente na remota
```
git fetch --prune
```

## Resetar/Atualizar branch
Usar em outras maquinas para limpar os branch e mostrar os corretos
```
git fetch --all --prune
```
*******

## Clonar todos remote branches
### Listar todos os branches: 
```
git branch –a
```

### Criando rastreamento local:
```
git checkout -b NOMEBRANCH ORIGIN/NOMEBRANCH
```
*******

## Copiando uma branch remota localmente
Agora, outras pessoas que quiserem contribuir numa determinada branch remota, precisam copiá-la localmente. Isto é feito com o seguinte comando:
```
git checkout -t origin/design
```
*******

## Tags
### Criar tag: 
```
git tag NOMETAG
```

### Criar tag anotada (com mensagem): 
```
git tag -a NOMETAG -m “MENSAGEM DA TAG”  
```

### Verificar tags existentes: 
```
git tag -l
```

### Ver todos os commits específicos associados a uma tag:
```
git show NOMETAG
```

### Enviar uma tag especifica ao repositório remote:
```
git push origin NOMETAG
```

### Enviar todas as tags: 
```
git push -–tags
```

### Removendo as tags criadas localmente: 
```
git tag -d NOMETAG
```

### Removendo tag no repositório remoto: 
```
git push origin :refs/tags/NOMETAG
```
*******

## Ver diferença entre branch
```
git diff nomebranch1 nomebranch2
```
*******

## Erro no pull

Certifique-se de sua equipe cometeu e empurrou quaisquer alterações pendentes.
Pergunte a sua equipe para fazer uma pausa no trabalho que ramo temporariamente.
Certifique-se de que você tem as últimas alterações para esse ramo (git pull).
Rebase, então origem:
```
git push origin <yourbranch> -f
```
A equipe arrumar suas filiais locais com:
```
git checkout <yourbranch>
git fetch and git reset --hard origin/<yourbranch>
```
>*Referencia: http://willi.am/blog/2014/08/12/the-dark-side-of-the-force-push/*
*******

## Reset arquivo
Voltar arquivo ao estado original:
```
git checkout NOMEARQUIVO
```

Retonar todos os arquivos modificados ao estado original do último commit:
```
git reset --hard
```

O comando acima afeta arquivos que já fazem parte do repositório, se você criou diversos arquivos novos:
```
git clean -d -f
```
*******

## Se precisar resetar para um estado específico basta dizer qual é:
```
git reset --hard hash_do_commit_aqui
```

## Forçar Pull
Se existir quaisquer mudanças locais que não tenham sido empurradas serão perdidas:
```
git fetch --all
git reset --hard origin/master
git pull origin master
```

## Forçar Push
Por algum motivo o push foi rejeitado
```
git push origin <your_branch_name> --force
```

## Remover arquivos de commits antigo
```
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch enderço/nome-do-arquivo'
```

## Remover / trocar url remote 
```
git remote remove origin ( remove a url)
git remote add origin git://sua url (insere a nova url)
git remote set-url origin git://sua url (quando alterar)
```

# teste
