// Ignite CLI plugin for Phogenerator
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()


const add = async function (toolbox) {
  // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
  const { ignite } = toolbox

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  // Example of copying templates/Phogenerator to app/ignite-phogenerator
  // if (!toolbox.filesystem.exists(`${APP_PATH}/app/ignite-phogenerator`)) {
  //   toolbox.filesystem.copy(`${PLUGIN_PATH}/templates/ignite-phogenerator`, `${APP_PATH}/app/ignite-phogenerator`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/app/config/app-config.js`, {
  //   insert: `import '../ignite-phogenerator/ignite-phogenerator'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (toolbox) {
  // Learn more about toolbox: https://infinitered.github.io/gluegun/#/toolbox-api.md
  const { ignite } = toolbox

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  // Example of removing app/Phogenerator folder
  // const removeignite-phogenerator = await toolbox.prompt.confirm(
  //   'Do you want to remove app/ignite-phogenerator?'
  // )
  // if (removeignite-phogenerator) { toolbox.filesystem.remove(`${APP_PATH}/app/ignite-phogenerator`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/app/config/app-config.js`, {
  //   delete: `import '../ignite-phogenerator/ignite-phogenerator'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

