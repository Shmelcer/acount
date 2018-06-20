require(`colors`);

const args = process.argv.slice(2);

switch (args[0]) {
  case `--help`:
    console.log(`Это приложение на стадии разработки. Используемые параметры:
        --help -выводит помощь;
				--version - выводит версию приложения`);
    break;
  case `--version`:
    console.log(`v0.0.1`);
    break;
  default:
    console.log(`This application doesnt to anything helpful.
        Just prints some info and version.`);

    console.error(`To list possible options use '--help'`);
}
