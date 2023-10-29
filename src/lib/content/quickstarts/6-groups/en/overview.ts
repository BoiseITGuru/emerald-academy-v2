import { AppTypeEnum, type Quickstart } from '$lib/types/content/quickstart.interface';
import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';

export const overview: Quickstart = {
	title: 'Groups',
	contentType: ContentTypeEnum.Quickstart,
	type: AppTypeEnum.NextJS,
	author: {
		name: 'Emerald City',
		socialMediaUrl: 'https://twitter.com/emerald_dao',
		avatarUrl: 'https://avatars.githubusercontent.com/u/100654804?v=4',
		isVerified: true
	},
	quickstartRepositoryUrl: 'https://github.com/emerald-dao/6-groups',
	excerpt:
		'A Next.js DApp that allows users to create Groups, join & leave them, discover Groups, and chat inside of them.',
	metadata: {
		subjects: [SubjectsEnum.DApp]
	}
};
