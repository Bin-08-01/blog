import Link from 'next/link'
import dayjs from 'dayjs'
import {Post} from '../notion/postType'
import {MdUpdate, MdOutlineDescription} from "react-icons/md";
dayjs().format()



export const PostContent = ({post}: { post: Post }) => {
    return (
        <Link href={`/blog/${post.slug}`} className="card-body" key={`${post.id}_content`}>
            <div className='notion light-mode notion-page notion-block mx-3'>
                <div className="card-title d-flex align-items-center">
                    <div className="profile align-items-center">
                        <div>
                            <p className="mb-0 notion-link text-blue-400 mt-2 text-2xl mb-2 font-semibold"
                               id={`${post.id}_title`}>{post.title}</p>
                            <p className={"mt-1 text-gray-400 flex"}><MdOutlineDescription
                                className={"relative top-1 mr-1"}/>{post.description || post.title}</p>
                        </div>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted text-sm text-gray-400 flex" id={`${post.id}_published_at`}>
                    <MdUpdate
                        className={"relative top-1 mr-1"}/>{dayjs(post.date, "MM-DD-YYYY").format("hh:mm | MMM DD, YYYY")}
                </h6>
                <div className="d-flex flex flex-row my-2">
                    {post.hashtags?.map((hashtag) => {
                        return (
                            <div key={`${post.id}_${hashtag}`} className="me-3 mx-1 flex justify-center items-center">
                                {/*<Link href={`/?hashtags=${hashtag}`}>*/}
                                <div>
                                    <span
                                        className="h6 mb-0 notion-link bg-yellow-500 dark:bg-green-300 text-gray-900 px-1 rounded">#{hashtag}</span>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Link>
    )
}
