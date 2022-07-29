import { StoryId } from '../../../../../common/domain/story/story';
import { STORY_API_ENDPOINT } from '../../../../../common/infrastructure/http/apiConstants';

interface RequestInfoResponse {
    key: string;
    fields: {
        components: [
            {
                id: string;
                name: string;
                [key: string]: unknown;
            }
        ];
        [key: string]: unknown;
    }
    [key: string]: unknown;
}

interface StoryComponent {
    id: string;
    name: string;
}

interface StoryServerInfo {
    id: string;
    components: StoryComponent[];
}

export const getStoryInfo = async (storyId: StoryId): Promise<StoryServerInfo> =>
    new Promise<StoryServerInfo>((resolve, reject) => {
        const url = `${STORY_API_ENDPOINT}${storyId}`;

        fetch(url).then(
            async (res) => {
                const result = await res.json() as RequestInfoResponse;

                resolve({
                    id: result.key,
                    components: result.fields.components?.map(component => ({
                       id: component.id,
                       name: component.name,
                    })) || [],
                } as StoryServerInfo);
            }
        ).catch((error) => {
            reject(error);
        })
    });