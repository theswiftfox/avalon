package main

import (
	"github.com/leaanthony/mewn"
	"github.com/theswiftfox/gocapi"
	"github.com/wailsapp/wails"
)

func basic() string {
	return "World!"
}

type AddonHelper struct {
}

func NewAddonHelper() *AddonHelper {
	return &AddonHelper{}
}

func (a *AddonHelper) GetFeatured() *gocapi.FeaturedResponse {
	val, _ := gocapi.GetFeaturedWoWAddons()
	return val
}

func (a *AddonHelper) Search(term string) []gocapi.AddonInfo {
	val, _ := gocapi.SearchForWoWAddon(term, "")
	return val
}

func main() {

	js := mewn.String("./frontend/dist/my-app/main.js")
	css := mewn.String("./frontend/dist/my-app/styles.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  1024,
		Height: 768,
		Title:  "avalon",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(basic)
	app.Bind(NewAddonHelper())
	app.Run()
}
