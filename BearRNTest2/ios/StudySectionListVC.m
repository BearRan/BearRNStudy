//
//  StudySectionListVC.m
//  BearRNTest2
//
//  Created by apple on 2017/7/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "StudySectionListVC.h"

@interface StudySectionListVC ()

@end

@implementation StudySectionListVC

- (void)viewDidLoad {
  [super viewDidLoad];
  
  [self crateUI];
}

- (void)crateUI
{
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"DemoFile/1-9SectionList.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"BearRNTest2"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  self.contentView = rootView;
  [self.view addSubview:self.contentView];
  
  self.contentView.frame = CGRectMake(0, 64, WIDTH, HEIGHT - 64);
  self.contentView.backgroundColor = [UIColor whiteColor];
}

@end
