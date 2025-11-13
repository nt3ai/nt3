import { YouTubeEmbed } from "@next/third-parties/google";
import { FadeInOutWrapper } from "@/components/motion-wrappers";
import { VideoCard } from "@/components/video-card";
import { getVideoById, getVideosByCategory } from "@/lib/videos";
import { extractYouTubeId } from "@/utils/extract-youtube-id";

export default async function VideoWatchPage(
  props: PageProps<"/videos/v/[id]">
) {
  const { id } = await props.params;

  const video = getVideoById(id);

  if (!video) {
    return (
      <div>
        <h1>video not found</h1>
      </div>
    );
  }

  const youtubeId = extractYouTubeId(video.youtubeUrl);

  // Get related videos by checking all categories of the current video
  const relatedVideos = Array.isArray(video.category)
    ? video.category.flatMap((cat) => getVideosByCategory(cat))
    : getVideosByCategory(video.category);

  // Remove duplicates and the current video
  const uniqueRelatedVideos = Array.from(
    new Map(
      relatedVideos
        .filter((v) => v.id !== video.id)
        .map((video) => [video.id, video])
    ).values()
  );

  return (
    <FadeInOutWrapper className="container max-w-5xl mx-auto my-10">
      <div className="relatve aspect-video">
        <YouTubeEmbed
          height={400}
          params="autoplay=1"
          style="width: 100%; max-width: 100%;"
          videoid={youtubeId as string}
        />
      </div>

      <div className="flex flex-col gap-2 my-10 pl-5">
        {/* Single-line ellipsis for title */}
        <h1 className="text-2xl font-medium truncate">{video.title}</h1>

        {/* Multi-line ellipsis (2 lines) for description */}
        <p className="text-muted-foreground text-base line-clamp-2 font-mono">
          {video.description}
        </p>
      </div>

      {relatedVideos.length > 0 && (
        <div className="flex flex-col gap-2 my-10 w-full">
          {/* Single-line ellipsis for title */}
          <h2 className="lg:text-xl text-lg font-medium mb-2 pl-5">
            More related videos
          </h2>

          {/* Multi-line ellipsis (2 lines) for description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
            {uniqueRelatedVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}
    </FadeInOutWrapper>
  );
}
