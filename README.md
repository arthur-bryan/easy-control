# :octocat: Easy-Control
Easy-Control é uma aplicação WEB que permite controlar eletrodomésticos e sensores remotamente por uma interface gráfica.
![painel](https://user-images.githubusercontent.com/34891953/134446690-e17e22cd-8eb1-4cf6-b18f-05f9dc213c10.png)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a4bfef346f4740bbb66520ae8399ad3f)](https://www.codacy.com/gh/arthur-bryan/easy-control/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=arthur-bryan/easy-control&amp;utm_campaign=Badge_Grade)
[![Open Source](https://img.shields.io/badge/-Open%20Source-3066be?logo=Github&logoColor=white&link=https://github.com/arthur-bryan/easy-control)](https://github.com/arthur-bryan/easy-control)
[![Status Badge](   https://img.shields.io/badge/status-development-3066be)](https://github.com/arthur-bryan/easy-control)
![GitHub](https://img.shields.io/github/license/arthur-bryan/easy-control?color=blue)
[![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/arthur-bryan/easy-control)](https://github.com/arthur-bryan/easy-control/tags)
![GitHub repo size](https://img.shields.io/github/repo-size/arthur-bryan/easy-control)

## :page_facing_up: Requerimentos
- Orange Pi PC (não testado em outros modelos)
- Módulos relé e demais componentes para controlar os eletrodomésticos
- Objetos para serem controlados, ex: ventiladores, lâmpadas...

## :hammer_and_wrench: Instalação

Clone o repositório do projeto:

```sh
git clone https://github.com/arthur-bryan/easy-control
```

Instale as dependências do projeto:

```sh
git clone https://github.com/zhaolei/WiringOP.git -b h3
cd WiringOP
chmod +x ./build
sudo ./build
cd ../easy-control
npm i package.json
```

Execute os comandos a seguir como usuário root:

```sh
apt install mariadb-server
mariadb -u root 
```

Execute os seguintes comandos para criar e popular o banco de dados:
Obs: Edite os valores por sua conta e risco

```sql
CREATE USER 'easy-control'@localhost IDENTIFIED BY '34SYC0N7R0L';
GRANT ALL PRIVILEGES ON `easy-control`.* TO `easy-control`@`localhost` IDENTIFIED BY '34SYC0N7R0L';

CREATE DATABASE IF NOT EXISTS `easy-control` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `easy-control`;

CREATE TABLE IF NOT EXISTS `objects` (
  `id` int(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `gpio` int(5) NOT NULL,
  `status` int(5) NOT NULL
) AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL
) AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`username`, `password`) VALUES ('admin', 'Admin@123');

INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Lâmpada Sala 1', 2, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Lâmpada Sala 2', 5, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Lâmpada Terraço', 7, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Lâmpada Quintal', 8, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Lâmpada Banheiro', 13, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Ventilador 1', 16, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Ventilador 2', 19, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Portão Garagem', 20, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Câmera Sala', 22, 0);
INSERT INTO `objects` (`name`, `gpio`, `status`) VALUES ('Câmera Varanda', 23, 0);
```

Reinicie o serviço MariaDB:

```sh
systemctl restart mariadb && systemctl enable mariadb
```

Configure os pinos para o modo de output (necessário sempre que o Orange PI for reiniciado)

```
./setup-gpios.sh
```

Inicie a aplicação:

```sh
node app.js
```

##### Por padrão , as credenciais de login são:
Usuário: admin
Senha: Admin@123

## :movie_camera: Demonstração
![login](https://user-images.githubusercontent.com/34891953/134446683-042b659e-c96c-46be-bfcd-a3c11b27bbc1.png)
![painel](https://user-images.githubusercontent.com/34891953/134446690-e17e22cd-8eb1-4cf6-b18f-05f9dc213c10.png)

## :copyright: Licença
[MIT License](https://github.com/arthur-bryan/easy-control/blob/master/LICENSE.md)
