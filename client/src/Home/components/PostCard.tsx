import { ArrowDown, ArrowUp, MessageCircle } from "lucide-react"

function PostCard() {
    return (
        <section className="flex flex-col gap-2 text-gray-500 px-2 py-2 border rounded-lg max-h-[200px] overflow-clip">
            <h1 className="text-lg text-primary hover:underline cursor-pointer line-clamp-1">
                React & NestJs Boilerplate
            </h1>
            <section className="flex flex-row gap-4 text-xs">
                <section className="px-2 py-1 bg-blue-300 rounded-lg">
                    Github
                </section>
            </section>
            <p className="line-clamp-3 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu mollis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer auctor placerat pulvinar. Integer eget ex ac justo lobortis pulvinar. Duis ac lorem eu sapien venenatis vehicula vitae id orci. Donec luctus mauris quis iaculis faucibus. Aliquam id blandit metus. Mauris ut congue quam. Curabitur vestibulum ultrices mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam imperdiet enim ut massa bibendum gravida. Nullam volutpat ex sed elit tempus euismod. Nam egestas ante sit amet ligula rutrum pulvinar. Pellentesque non blandit sem.
            </p>
            <section className="flex flex-col md:flex-row gap-2 justify-between items-center text-xs mt-2">
                <section className="flex flex-row gap-4 items-center">
                    <ArrowUp />
                    <ArrowDown />
                    <MessageCircle />
                </section>
                <section className="flex flex-row gap-4 items-center">
                    <span>Gaurav Kumar Karki</span>
                    <span className="py-1 bg-slate-200 px-2 rounded-lg">24th Jan, 2024</span>
                </section>
            </section>
        </section>
    )
}

export default PostCard