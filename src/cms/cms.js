import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import RecipePreview from './preview-templates/RecipePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('recipe', RecipePreview)
